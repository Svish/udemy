import sum from './sum';
console.log(sum(3, 7));

const button = document.createElement('button');
button.innerText = 'Show images';
button.onclick = () => {
  System.import('./imageViewer').then(module => {
    module.default();
  });
};
document.body.appendChild(button);
