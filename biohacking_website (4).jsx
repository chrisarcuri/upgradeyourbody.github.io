<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>BioHack Lab</title>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;600;800&display=swap" rel="stylesheet">

<style>
*{margin:0;padding:0;box-sizing:border-box}
body{font-family:'Inter',sans-serif;background:#020202;color:#fff}
.container{max-width:1200px;margin:auto;padding:20px}
nav{display:flex;justify-content:space-between;align-items:center;padding:20px 0;border-bottom:1px solid #111}
nav a{color:#aaa;margin-left:30px;text-decoration:none}
nav a:hover{color:#fff}
.hero{text-align:center;padding:140px 20px;background:radial-gradient(circle at top,rgba(255,255,255,.08),transparent 60%)}
.hero h1{font-size:64px;font-weight:800;background:linear-gradient(90deg,#fff,#888);-webkit-background-clip:text;-webkit-text-fill-color:transparent}
.hero p{margin-top:20px;color:#aaa;font-size:20px}
.btn{display:inline-block;margin-top:20px;padding:14px 28px;border-radius:12px;background:linear-gradient(135deg,#fff,#bbb);color:#000;font-weight:600;text-decoration:none}
.btn-outline{background:transparent;border:1px solid #444;color:#fff}
.section{padding:100px 0}
.section-title{text-align:center;font-size:36px;margin-bottom:50px}
.grid{display:grid;gap:30px}
.grid-3{grid-template-columns:repeat(auto-fit,minmax(260px,1fr))}
.card{background:linear-gradient(145deg,#0a0a0a,#111);border:1px solid #1f1f1f;padding:30px;border-radius:20px;transition:.3s}
.card:hover{transform:translateY(-10px);border-color:#444}
.card h3{margin-bottom:10px}
.card p{color:#aaa;font-size:14px;margin-bottom:10px}
.price{font-size:18px;font-weight:600;margin-bottom:10px}
.tag{font-size:11px;color:#00ffcc;margin-bottom:8px;display:block}
.email-box{display:flex;justify-content:center;margin-top:20px}
.email-box input{padding:12px;border-radius:8px;border:none;margin-right:10px;width:250px}
.email-box button{padding:12px 20px;border:none;border-radius:8px;background:#fff;color:#000;font-weight:600}
footer{border-top:1px solid #111;padding:50px 0;text-align:center;color:#777}
</style>
</head>

<body>
<div class="container">

<nav>
<h2>BioHack Lab</h2>
<div>
<a href="#products">Products</a>
<a href="#protocol">Protocols</a>
<a href="#science">Science</a>
<a href="#stack">My Stack</a>
</div>
</nav>

<section class="hero">
<h1>Upgrade Your Biology</h1>
<p>Elite biohacking tools, supplements, and performance systems.</p>
<a href="#products" class="btn">Shop Stack</a>
<a href="#science" class="btn btn-outline">Explore Science</a>
</section>

<!-- STACK PAGE -->
<section id="stack" class="section">
<h2 class="section-title">My Daily Stack</h2>
<div class="grid grid-3">
<div class="card"><h3>Morning Stack</h3><p>NMN + Electrolytes + Sunlight</p></div>
<div class="card"><h3>Focus Stack</h3><p>Caffeine + L-Theanine</p></div>
<div class="card"><h3>Sleep Stack</h3><p>Magnesium + Glycine</p></div>
</div>
</section>

<!-- PRODUCTS -->
<section id="products" class="section">
<h2 class="section-title">Top Biohacking Stack</h2>
<div class="grid grid-3">

<div class="card">
<span class="tag">ENERGY</span>
<h3>Methylene Blue</h3>
<p>Supports mitochondrial ATP production.</p>
<div class="price">$29.99</div>
<a href="https://www.amazon.com/s?k=methylene+blue+supplement" target="_blank" class="btn">Buy</a>
</div>

<div class="card">
<span class="tag">RECOVERY</span>
<h3>Hydrogen Water Bottle</h3>
<p>Reduces oxidative stress.</p>
<div class="price">$79.99</div>
<a href="https://www.amazon.com/s?k=hydrogen+water+bottle" target="_blank" class="btn">Buy</a>
</div>

<div class="card">
<span class="tag">FOCUS</span>
<h3>L-Theanine + Caffeine</h3>
<p>Smooth energy and focus.</p>
<div class="price">$19.99</div>
<a href="https://www.amazon.com/s?k=l+theanine+caffeine" target="_blank" class="btn">Buy</a>
</div>

</div>
</section>

<!-- PROTOCOL -->
<section id="protocol" class="section">
<h2 class="section-title">Daily Performance Protocol</h2>
<div class="grid grid-3">
<div class="card"><h3>Morning</h3><p>Sunlight, hydration, cold exposure.</p></div>
<div class="card"><h3>Midday</h3><p>Deep work, nutrition, supplements.</p></div>
<div class="card"><h3>Night</h3><p>Magnesium, no screens, sleep.</p></div>
</div>
</section>

<!-- SCIENCE -->
<section id="science" class="section">
<h2 class="section-title">Science & Research</h2>
<div class="grid grid-3">
<div class="card"><h3>NAD+ & Aging</h3><p>Boosting NAD+ improves cellular repair.</p><p class="small">Dr. David Sinclair</p></div>
<div class="card"><h3>Sleep Optimization</h3><p>Magnesium improves sleep quality.</p><p class="small">Dr. Huberman</p></div>
<div class="card"><h3>Longevity</h3><p>Fisetin reduces aging cells.</p><p class="small">Mayo Clinic</p></div>
</div>
</section>

<!-- EMAIL CAPTURE -->
<section class="section" style="text-align:center">
<h2>Join the Biohacking Movement</h2>
<p style="color:#aaa">Get weekly protocols & stacks</p>
<div class="email-box">
<input type="email" placeholder="Enter your email">
<button>Join</button>
</div>
</section>

<footer>
<p>BioHack Lab — Optimize your biology.</p>
<p>Not medical advice.</p>
</footer>

</div>
</body>
</html>
