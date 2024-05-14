
/* ingilizce word 
const words = [
    "Lorem", "ipsum", "dolor", "sit", "amet", "consectetur", "adipiscing", "elit", "sed", "do",
    "eiusmod", "tempor", "incididunt", "ut", "labore", "et", "dolore", "magna", "aliqua", "Ut",
    "enim", "ad", "minim", "veniam", "quis", "nostrud", "exercitation", "ullamco", "laboris", "nisi",
    "ut", "aliquip", "ex", "ea", "commodo", "consequat", "Duis", "aute", "irure", "dolor", "in",
    "reprehenderit", "in", "voluptate", "velit", "esse", "cillum", "dolore", "eu", "fugiat", "nulla",
    "pariatur", "Excepteur", "sint", "occaecat", "cupidatat", "non", "proident", "sunt", "in", "culpa",
    "qui", "officia", "deserunt", "mollit", "anim", "id", "est", "laborum", "Sed", "ut", "perspiciatis",
    "unde", "omnis", "iste", "natus", "error", "sit", "voluptatem", "accusantium", "doloremque",
    "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo", "inventore",
    "veritatis", "et", "quasi", "architecto", "beatae", "vitae", "dicta", "sunt", "explicabo",
    "Nemo", "enim", "ipsam", "voluptatem", "quia", "voluptas", "sit", "aspernatur", "aut", "odit", "aut",
    "fugit", "sed", "quia", "consequuntur", "magni", "dolores", "eos", "qui", "ratione", "voluptatem",
    "sequi", "nesciunt", "Neque", "porro", "quisquam", "est", "qui", "dolorem", "ipsum", "quia", "dolor",
    "sit", "amet", "consectetur", "adipisci", "velit", "sed", "quia", "non", "numquam", "eius", "modi",
    "tempora", "incidunt", "ut", "labore", "et", "dolore", "magnam", "aliquam", "quaerat", "voluptatem",
    "Ut", "enim", "ad", "minima", "veniam", "quis", "nostrum", "exercitationem", "ullam", "corporis",
    "suscipit", "laboriosam", "nisi", "ut", "aliquid", "ex", "ea", "commodi", "consequatur", "Quis",
    "autem", "vel", "eum", "iure", "reprehenderit", "qui", "in", "ea", "voluptate", "velit", "esse",
    "quam", "nihil", "molestiae", "et", "iusto", "odio", "dignissimos", "ducimus", "qui", "blanditiis",
    "praesentium", "voluptatum", "deleniti", "atque", "corrupti", "quos", "dolores", "et", "quas",
    "molestias", "excepturi", "sint", "occaecati", "cupiditate", "non", "provident", "sed", "ut",
    "perspiciatis", "unde", "omnis", "iste", "natus", "error", "sit", "voluptatem", "accusantium",
    "doloremque", "laudantium", "totam", "rem", "aperiam", "eaque", "ipsa", "quae", "ab", "illo",
    "inventore", "veritatis", "et", "quasi", "architecto", "beatae", "vitae", "dicta", "sunt", "explicabo"
];
*/


/* kelimeler */
var turKelimeler = [
    "merhaba", "iyi", "geceler", "javascript", "fonksiyon", "örnek", "dizi", "kelime", "oluşturmak", "veri", 
    "işlem", "döngü", "koşul", "ifade", "değişken", "dil", "programlama", "uygulama", "proje", "geliştirmek", 
    "web", "site", "tasarım", "geliştirici", "yazılım", "kodlama", "eğitim", "öğrenme", "bilgi", "beceri", 
    "kullanıcı", "arayüz", "kaynak", "belge", "yazmak", "okumak", "anlamak", "uygulamak", "giriş", "çıkış", 
    "veritabanı", "dosya", "dizin", "sistem", "işletim", "hata", "debug", "test", "modül", "kütüphane", 
    "sözlük", "tercüme", "gelişim", "proje", "plan", "hedef", "başarı", "başarısızlık", "hata", "sorun", 
    "çözüm", "fikir", "öneri", "destek", "topluluk", "paylaşım", "bilgisayar", "internet", "ağ", "bağlantı", 
    "site", "tarayıcı", "güvenlik", "şifre", "yetki", "girişim", "geçmiş", "gelecek", "bugün", "yarın", 
    "hazır", "düşünmek", "planlamak", "başlamak", "bitirmek", "devam", "durmak", "dikkat", "odaklanmak", 
    "olumlu", "olumsuz", "motivasyon", "ilerleme", "gerileme", "zaman", "zorluk", "kolaylık", "hız", 
    "geçikme", "gelişme", "geri", "ilgi", "takip", "trend", "teknoloji", "yeni", "eski"
];
 
var karısıkkelime=  turKelimeler [(Math.floor(Math.random()*turKelimeler.length))]

 /* kelimeyi karışık yazzdırmak */
 var harflera=karısıkkelime.split('');//kelimenin harflerini ayırır
 harflera.sort(function(){
     return 0.5 - Math.random();
 });

 var kk=document.getElementById("dklm").innerHTML=harflera.join('');



function kontr(){
    var turKelimeler = [
        "merhaba", "iyi", "geceler", "javascript", "fonksiyon", "örnek", "dizi", "kelime", "oluşturmak", "veri", 
        "işlem", "döngü", "koşul", "ifade", "değişken", "dil", "programlama", "uygulama", "proje", "geliştirmek", 
        "web", "site", "tasarım", "geliştirici", "yazılım", "kodlama", "eğitim", "öğrenme", "bilgi", "beceri", 
        "kullanıcı", "arayüz", "kaynak", "belge", "yazmak", "okumak", "anlamak", "uygulamak", "giriş", "çıkış", 
        "veritabanı", "dosya", "dizin", "sistem", "işletim", "hata", "debug", "test", "modül", "kütüphane", 
        "sözlük", "tercüme", "gelişim", "proje", "plan", "hedef", "başarı", "başarısızlık", "hata", "sorun", 
        "çözüm", "fikir", "öneri", "destek", "topluluk", "paylaşım", "bilgisayar", "internet", "ağ", "bağlantı", 
        "site", "tarayıcı", "güvenlik", "şifre", "yetki", "girişim", "geçmiş", "gelecek", "bugün", "yarın", 
        "hazır", "düşünmek", "planlamak", "başlamak", "bitirmek", "devam", "durmak", "dikkat", "odaklanmak", 
        "olumlu", "olumsuz", "motivasyon", "ilerleme", "gerileme", "zaman", "zorluk", "kolaylık", "hız", 
        "geçikme", "gelişme", "geri", "ilgi", "takip", "trend", "teknoloji", "yeni", "eski"
    ];

     /* rastgele gelen kelimeler */
    var karısıkkelime=  turKelimeler [(Math.floor(Math.random()*turKelimeler.length))]

    var doğruyaz=document.getElementById("kelimeyaz").value;
    
    /* kelimeyi karışık yazzdırmak */
    var harflera=karısıkkelime.split('');//kelimenin harflerini ayırır
    harflera.sort(function(){
        return 0.5 - Math.random();
    });
    


    
  


  

setTimeout(function(){
    var karısıkkelime=  turKelimeler [(Math.floor(Math.random()*turKelimeler.length))]

    var doğruyaz=document.getElementById("kelimeyaz").value;
    
    /* kelimeyi karışık yazzdırmak */
    var harflera=karısıkkelime.split('');//kelimenin harflerini ayırır
    harflera.sort(function(){
        return 0.5 - Math.random();
    });
    var kk=document.getElementById("dklm").innerHTML=harflera.join('')

},4000);


if(turKelimeler.includes(doğruyaz)){
    document.getElementById("dkelime").innerHTML="doğru yazdın "
    document.getElementById("kelimeyaz").value=""
}else{
    document.getElementById("dkelime").innerHTML="yanlış yazdın  "
    document.getElementById("kelimeyaz").value=""
    

}

}
