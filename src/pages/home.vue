<template>
  <div class="home-container">
    <div class="hero-section">
      <h1>Welcome to Our Homepage</h1>
      <p>Discover the latest trends and innovations</p>
      <button class="cta-button">Get Started</button>
    </div>
    <div class="feature-section">
      <div class="feature">
        <img src="src/assets/personSatu.jpg" alt="Feature 1">
        <h2>Dedad Fajar</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="feature">
        <img src="src/assets/personDua.jpg" alt="Feature 2">
        <h2>Naufal</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
      <div class="feature">
        <img src="src/assets/PersonTiga.jpg" alt="Feature 3">
        <h2>Muhammad Eka</h2>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.home-container {
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
  padding: 10px;
}

.hero-section {
  text-align: center;
  padding: 40px 0;
  background-color: #f0f0f0;
  border-radius: 20px;
}

.hero-section h1 {
  font-size: 2.5em;
  margin-bottom: 3px;
}

.cta-button {
  margin-top: 6px;
  padding: 10px 20px;
  font-size: 1em;
  background-color: darkorange;
  color: white;
  border: none;
  cursor: pointer;
  border-radius: 20px;
}

.cta-button:hover {
  background-color: rgb(227, 125, 0);
}

.feature-section {
  display: flex;
  justify-content:center;
  margin-top: 50px;
}

.feature {
  text-align: center;
  width: 200px;
  margin: 0 10px;
}

.feature img {
  margin-inline: auto;
  max-width: 80%;
  height: auto;
  border-radius: 8px;
  margin-bottom: 15px;
}

.feature h2 {
  text-align:center;
  font-size: 1.5em;
  margin-bottom: 10px;
}

.feature p {
  color: #555;
}
</style>
