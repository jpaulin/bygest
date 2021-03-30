import React from 'react';
import { Canvas } from 'react-three-fiber';
import { Welcome } from './views/welcome';
import { OKButton } from './components/okbutton';

import Scene from './views/Scene';

/* 
function App() {
  return (
    <Canvas>
      <Scene />
    </Canvas>
  );
}

*/

function App() {
	return (
		<div>
			<Welcome/>
			<OKButton/>
		</div>
	);
}


export default App;
