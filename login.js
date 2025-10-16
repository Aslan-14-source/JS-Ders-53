function login() {
    document.querySelector('form').addEventListener('submit', (e) => {
        e.preventDefault();

        let user = {
            username: document.getElementById('username').value,
            password: document.getElementById('password').value
        };

        fetch('http://195.26.245.5:9505/api/auth', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(async response => {
                let respObj = await response.json();
                if (response.ok) {
                    alert('Uğurla sistemə daxil oldunuz');
                    window.location.href = 'index.html';
                    localStorage.setItem('response', JSON.stringify(respObj.body));
                } else {
                    alert(respObj.message);
                }
            });
    });
}

login();
