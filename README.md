<h1>Bioskop API - Zhirrr</h1>

<h4>Data JSON yang akan didapatkan</h4>
<ul>
  <li>Image</li>
  <li>Bioskop</li>
  <li>Film</li>
  <li>Url</li>
</ul>

<h4>Pathname</h4>
<ul>
   <li>now-playing</li>
   <li>comingsoon</li>
   <li>daerah</li>
   <li>bioskop</li>
</ul>

<h4>Parameter</h4>
<ul>
   <li>page</li>
   <li>daerah</li>
</ul>

<h4>Contoh</h4>
<b>1. Movie Terbaru yang sedang berlangsung</b>
  <div style="background-color='#f4f9f9'">
    <pre>https://bioskop-api-zahirr.herokuapp.com/api/now-playing</pre>
  </div>
  <b>2. Movie yang akan tayang keseluruhan</b>
  <div style="background-color='#f4f9f9'">
    <pre>https://bioskop-api-zahirr.herokuapp.com/api/comingsoon/all</pre>
  </div>
  
  <b>3. Movie yang akan tayang berdasarkan pages website</b>
<div style="background-color='#f4f9f9'">
    <pre>https://bioskop-api-zahirr.herokuapp.com/api/comingsoon?page=4</pre>
  </div>
  
  <b>4. Daftar bioskop seluruh kota berdasarkan pages web</b>
<div style="background-color='#f4f9f9'">
    <pre>https://bioskop-api-zahirr.herokuapp.com/api/bioskop/all?page=2</pre>
  </div>
  
<b>5. Daftar bioskop seluruh kota berdasarkan daerah dan pages web</b>
<div style="background-color='#f4f9f9'">
    <pre>https://bioskop-api-zahirr.herokuapp.com/api/daftar/bioskop?daerah=jakarta&page=3</pre>
  </div>
  
### List Daerah
Untuk List Daerah Dari Api Ini, Kalian Bisa Liat Di File daftarKota.txt

### LICENSE
Ini adalah Api Open Source, jika kalian ingin meRecode nya hubungi saia dan jangan diperjualbelikan yaaaaaaa