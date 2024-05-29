import React, { useEffect, useState } from "react";

function Users() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); //En başta değer 'true' olmalı çünkü sayfa açılırken yüklenir.

  useEffect(() => {
    //"fetch" içerisine istek atmak istediğimiz endpoint i belirtiyoruz. (Rest api)
    fetch("https://jsonplaceholder.typicode.com/users") //native olarak kullanabildiğimiz bir özellik ekstra bir kütüphane tanımlamamıza gerek yok
      //"then" zinciri ile işlem tamamlandığında bilgi sahibi olabiliriz.
      .then((res) => res.json()) //Bize sonuç geldiğinde biz bu sonucu 'json' olarak bir kere parse etmemiz gerekecek
      .then((data) => setUsers(data)) //Bir sonraki "then"  zincirinde artık datayı kullanabiliriz. İşlem tamamlandığında 'data'yı users state'ine atıyoruz.
      .finally(() => setLoading(false)); //Yüklenme işlemi tamamlanınca loading'i false yapıyoruz.
  }, []);

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
  );
}
export default Users;
