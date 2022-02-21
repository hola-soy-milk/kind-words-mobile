import { StyleSheet, View } from 'react-native';
import {colors} from  './styles/constants';

export default (props) => {
  const {sender, body, handle, createdAt} = props;
  return (
    
  )
}

const styles = StyleSheet.create({
card: {
    backgroundColor: colors.cardBackground;
    paddingTop: 1rem;
    paddingLeft: 3rem;
    paddingRight: 3rem;
    paddingBottom: 1rem;
    display: flex;
    flexDirection: column;
    justifyContent: space-between;
    borderRadius: 3rem;
    marginBottom: 3rem;
    border: var(--card-shadow) 0.5rem solid;
    border-top-width: 0;
    border-left-width: 0;
    border-bottom-right-radius: 3rem;
    border-bottom-left-radius: 3rem;
    border-top-right-radius: 3rem;
    text-align: left;
  }
});