import React, { useEffect, useState } from 'react';
import axios from 'axios';

/*
Fetch fonksiyonu ile yapılan işlemleri ve daha fazlasını 'axios' ile yapabiliriz. Örneğin başlatmış olduğumuz bir isteği durdurabiliriz.
Veya fetch'i kullandığımızda sonuç geldiinde json olarak parse ediyorduk. Axios da buna gerek yok.
Ancak bunu kullanmak için projemize 'axios' kütüphanesini kurmamız gerekir.
*/

function AsyncAwaitUsers() {
    const [users, setUsers] = useState([]);
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        // axios("https://jsonplaceholder.typicode.com/users") //Eğer ``kullanırsak içerisine parametre verebiliriz. "" şaretinde parametre veremeyiz.
        // .then((res) => {
        //   setUsers(res.data);

        //   axios(
        //     `https://jsonplaceholder.typicode.com/posts?userId=${res.data[0].id}`
        //     ).then((res) => {
        //     console.log(res.data);
        //   });
        // })
        // .finally(() => setLoading(false));
        getData();
        
    },[]);

    const getData = async () => {
      const { data: users } = await axios(
        "https://jsonplaceholder.typicode.com/users"
      );
      const {data: posts} = await axios(
        `https://jsonplaceholder.typicode.com/posts?userId=${users[0].id}`
      );

      setLoading(false);
      setUsers(users);
      setPosts(posts);

      console.log("users", users);
      console.log("posts", posts);
    }
  return (
    <div>
        <h2>Users</h2>
        {loading && <div>Yükleniyor...</div>}
        <ul>
            {users.map((user) => (
            <li key={user.id}>{user.name}</li>
            ))}
        </ul>

        <h2>Posts</h2>
        <ul>
          {posts.map((posts) => (
            <li key={posts.id}>{posts.title}</li>
          ))}
        </ul>
    </div>
  )
}

export default AsyncAwaitUsers;