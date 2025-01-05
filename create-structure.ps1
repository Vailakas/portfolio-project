$structure = @"
Art-Portfolio Project Structure

Art-Portfolio/
├── index.html
├── gallery.html
├── contact.html
├── css/
│   ├── style.css
│   └── gallery.css
├── js/
│   ├── main.js
│   └── gallery.js
├── images/
└── project-structure.txt
"@

$structure | Out-File -FilePath "project-structure.txt"
Write-Host "Structure file created successfully!" 