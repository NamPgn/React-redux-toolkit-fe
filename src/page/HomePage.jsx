import React from 'react'
import { Link } from 'react-router-dom'
const HomePage = () => {
  return (
    <div className='text-center' style={{ background: "#333", height: "100vh", color: "#fff" }}>
      <div class="cover-container d-flex h-100 p-3 mx-auto flex-column">
      
        <main role="main" class="inner cover mt-auto">
          <h1 class="cover-heading">Cover your page.</h1>
          <p class="lead">Cover is a one-page template for building simple and beautiful home pages. Download, edit the text, and add your own fullscreen background photo to make it your own.</p>
          <p class="lead">
            <a href="#" class="btn btn-lg btn-secondary">Learn more</a>
          </p>
        </main>

        <footer class="mastfoot mt-auto">
          <div class="inner">
            <p>Cover template for <a href="https://getbootstrap.com/">Bootstrap</a>, by <a href="https://twitter.com/mdo">@mdo</a>.</p>
          </div>
        </footer>
      </div>
    </div>
  )
}

export default HomePage