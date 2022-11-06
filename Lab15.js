

import React from "react";

function ImageGridDemo() {
  const images = [
    {
      src1:
        "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      width: 450,
      height: 500,
      src:
      "https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D"
   
    },
    {
      src1:
        "https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
        
      width: 450,
      height: 500
    },
    {
      src1:
        "https://images.unsplash.com/photo-1491146179969-d674118945ff?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      width: 450,
      height: 500
    },
    {
      src1:
        "https://images.unsplash.com/photo-1509420316987-d27b02f81864?dpr=1&auto=format&fit=crop&w=1500&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      width: 450,
      height: 500
    },
    {
      src1:
        "https://images.unsplash.com/photo-1509641498745-13c26fd1ed89?dpr=1&auto=format&fit=crop&w=1000&q=80&cs=tinysrgb&ixid=dW5zcGxhc2guY29tOzs7Ozs%3D",
      width: 450,
      height: 500
    }
  ];
  return (
    <div>
      <h1>Image</h1>
      <br />
      <hr />
      <table border="1">
        {images.map((image) => {
          return (
            <div>
              <tr >
                <td>
                  <img src={image.src1} height="40" width="30" />
                  <img src={image.src} height="40" width="30" />
                </td>
              </tr>
            </div>
          );
        })}
      </table>
    </div>
  );
};

export default ImageGridDemo;
