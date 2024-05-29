import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
Fetch fonksiyonu ile yapılan işlemleri ve daha fazlasını 'axios' ile yapabiliriz. Örneğin başlatmış olduğumuz bir isteği durdurabiliriz.
Veya fetch'i kullandığımızda sonuç geldiinde json olarak parse ediyorduk. Axios da buna gerek yok.
Ancak bunu kullanmak için projemize 'axios' kütüphanesini kurmamız gerekir.
*/

function AxiosUsers() {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios("https://jsonplaceholder.typicode.com/users")
        .then((res) => setUsers(res.data))
        .finally(() => setLoading(false));
    },[])
  return (
    <div>
        <h2>Users</h2>
        {loading && <div>Yükleniyor...</div>}
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>
    </div>
  )
}

export default AxiosUsers;
