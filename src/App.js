import "./App.css";

function App() {
  return (
    <main>
      <header>
        <a href="" className="logo">
          MyBlog
        </a>

        <nav>
          <a href="">Login</a>
          <a href="">Register</a>
        </nav>
      </header>

      <div className="post">
        <div className="image">
          {" "}
          <img
            src="https://images.unsplash.com/photo-1581798269145-7512508289b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="imgentry"
          />{" "}
        </div>

        <div className="postContent">
          <h2>The History of Candy: A Sweet Journey Through Time</h2>
          <p className="info">
            <span className="author">Anushka</span>
            <time>2023-07-31</time>
          </p>
          <p className="summary">
            Explore the fascinating history of candy, from its ancient origins
            to modern-day favorites. Share fun facts and trivia about the
            evolution of candy-making techniques and popular treats.
          </p>
        </div>
      </div>

      <div className="post">
        <div className="image">
          <img
            src="https://images.unsplash.com/photo-1581798269145-7512508289b9?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmR5fGVufDB8fDB8fHww&auto=format&fit=crop&w=400&q=60"
            alt="imgentry"
          />
        </div>

        <div className="postContent">
          <h2>The History of Candy: A Sweet Journey Through Time</h2>
          <p className="info">
            <span className="author">Anushka</span>
            <time>2023-07-31</time>
          </p>
          <p className="summary">
            Explore the fascinating history of candy, from its ancient origins
            to modern-day favorites. Share fun facts and trivia about the
            evolution of candy-making techniques and popular treats.
          </p>
        </div>
      </div>
    </main>
  );
}

export default App;
