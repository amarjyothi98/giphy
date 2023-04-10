import ReactGiphySearchbox from 'react-giphy-searchbox'

function App() {
  return (
    <>
    <header>
      <h1>React giphy searchbox</h1>
    </header>
    <div className="searchboxWrapper">
      <ReactGiphySearchbox
        apiKey='w7mZuyDd1v6lVfM6WyzuAdynkLYMac7H'
        // onSelect={(item) => console.log(item);}
        masonryConfig={[
          {columns: 2, imageWidth:110, gutter:5},
          {mq:"700px", columns:3, imageWidth: 120, gutter: 5}
        ]}
      />
    </div>
    </>
  );
}

export default App;
