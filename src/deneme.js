</div>
       {showKeyboard ? 
        <div className="keyboard">
          <input type="text" className="searchTermMobile" placeholder="Find a recipe" onChange={handleChange} value={searchValue}/>
          <Keyboard
            onChange={handleKeyboardChange}
            onKeyPress={() => {}}
          />
        </div>:
        <div>
          <App/>
          <div className="mobileContainer">
            <button type="submit" className="mobileSearchButton" onClick={handleKeyboard}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>   
      }
    
    </div>

      {showKeyboard ? 
        <div className="keyboard">
          <input type="text" className="searchTermMobile" placeholder="Find a recipe" onChange={handleChange} value={searchValue}/>
          <Keyboard
            onChange={handleKeyboardChange}
            onKeyPress={() => {}}
          />
        </div>:
        <div>
          <div className="search">
            <button type="submit" className="searchButton" onClick={handleKeyboard}>
              <i className="fa fa-search"></i>
            </button>
          </div>
        </div>