fn print_file(file: &str, printer: Option<&str>) {
  use std::process::Command;

  let mut cmd = Command::new("lp");
  cmd.arg("-o")
    .arg("fit-to-page") // Set to fit-to-page mode
    .arg(file);

  if let Some(printer_name) = printer {
    cmd.arg("-d").arg(printer_name);
  }

  match cmd.output() {
    Ok(output) => {
      if output.status.success() {
        println!("Print job submitted successfully.");
      } else {
        eprintln!(
          "Failed to submit print job: {}",
          String::from_utf8_lossy(&output.stderr)
        );
      }
    }
    Err(e) => {
      eprintln!("Error executing lp command: {}", e);
    }
  }
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
  tauri::Builder::default()
    .plugin(tauri_plugin_dialog::init())
    .setup(|app| {
      if cfg!(debug_assertions) {
        app.handle().plugin(
          tauri_plugin_log::Builder::default()
            .level(log::LevelFilter::Info)
            .build(),
        )?;
      }
      Ok(())
    })
    .run(tauri::generate_context!())
    .expect("error while running tauri application");
}
