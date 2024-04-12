// Prevents additional console window on Windows in release, DO NOT REMOVE!!
#![cfg_attr(not(debug_assertions), windows_subsystem = "windows")]

use std::process::Command;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hi {} from Rust!", name)
}

#[tauri::command]
fn execute_command(command: &str) -> Result<String, String> {
    let output = if cfg!(target_os = "windows") {
        Command::new("cmd").args(&["/C", command]).output()
    } else {
        Command::new("sh").args(&["-c", command]).output()
    };

    match output {
        Ok(output) => {
            let stdout = String::from_utf8_lossy(&output.stdout).to_string();
            let stderr = String::from_utf8_lossy(&output.stderr).to_string();
            if output.status.success() {
                Ok(stdout)
            } else {
                Err(stderr)
            }
        }
        Err(e) => Err(e.to_string()),
    }
}

fn main() {
    tauri::Builder::default()
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![greet, execute_command])
        .run(tauri::generate_context!())
        .expect("error while running tauri application");
}
