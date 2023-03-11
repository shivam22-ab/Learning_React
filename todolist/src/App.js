import './App.css';

function App() {
  return (
    <section id="body">
        <div class="todos">
            <h1>todos</h1>
            <div class="todos-container">
                <div class="upper-div">
                    <button id="downbtn"><i class="fa-solid fa-angle-down"></i></button>
                    <input type="text" id="input-text" name="text" placeholder="What needs to be done?"/>
                    <div class="end">
                        <button class="plus">+</button>
                    </div>
                </div>
                <div class="middle-div">
                    <ul></ul>
                </div>
                <div class="footer">
                    <div class="end-div">
                        <div class="left-div">
                            <p><span id="number"></span> items left</p>
                        </div>
                        <div class="mid-div">
                            <button id="all">All</button>
                            <p>Active</p>
                            <p>Completed</p>
                        </div>
                        <div class="last-div">
                            <p>Clear Completed</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  );
}

export default App;
