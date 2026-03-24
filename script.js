let files = {};

function uploadFile() {
    let input = document.getElementById("fileInput");
    let file = input.files[0];

    if (!file) return;

    if (!files[file.name]) {
        files[file.name] = [];
    }

    let version = files[file.name].length + 1;

    files[file.name].push({
        version: version,
        time: new Date().toLocaleString()
    });

    displayFiles();
}

function displayFiles() {
    let list = document.getElementById("fileList");
    list.innerHTML = "";

    for (let file in files) {
        let li = document.createElement("li");

        li.innerHTML = `<b>${file}</b><br>`;

        files[file].forEach(v => {
            li.innerHTML += `Version ${v.version} - ${v.time} 
            <button onclick="restore('${file}', ${v.version})">Restore</button><br>`;
        });

        list.appendChild(li);
    }
}

function restore(file, version) {
    alert(`Restored ${file} Version ${version}`);
}