import React from 'react';
import PlayerArea from '../containers/player_area';
import EnemyArea from '../containers/enemy_area';
import TextArea from '../containers/text_area';
require('../../scss/style.scss');

const App = () => (
    <div className="appContainer">
        <br />
		<EnemyArea />
		<hr />
		<PlayerArea />
		<hr />
		<TextArea />
    </div>
);

export default App;
