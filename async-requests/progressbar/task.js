const progress = document.querySelector('#progress');
const form = document.forms.form;

form.addEventListener('submit', event => {
    event.preventDefault();

    const formData = new FormData(form);
    formData.append('filename', file);

    const xhr = new XMLHttpRequest();
    xhr.open('POST', form.action);

    xhr.upload.addEventListener('progress', e => {
        if(e.lengthComputable) {
            let loading = e.loaded / e.total;
            progress.value = loading;
        };
    });

    xhr.onreadystatechange = () => {
        if(xhr.readyState !== xhr.DONE && xhr.status !== 200) {
            alert('Ошибка загрузки файла!');
        } else {
            alert('Загрузка успешно завершена!');
        };
    };

    xhr.send(formData);
    
});