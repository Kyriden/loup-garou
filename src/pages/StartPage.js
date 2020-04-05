import React from 'react';
import { Link } from 'react-router-dom';
import { useSession } from '../services/User';
import { createGame } from '../services/MasterGame';
import Button from '../components/Button';

const Start = () => {
  const { user } = useSession();
  return (
    <div>
      <Link to="/create" onClick={() => createGame(user)}> <Button>Nouvelle partie</Button>
      </Link>
      <br />
      <Link to="/join">
        <Button style={styles.margin}>Rejoindre une partie</Button>
      </Link>
    </div>
  );
}

const styles = {
  margin: {
    marginTop: '5px',
    marginBottom: '15px'
  }
}
export default Start;
