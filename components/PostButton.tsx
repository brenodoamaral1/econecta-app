import React from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import PostButtonIcon from '../assets/PostButton.svg';

const PostButton: React.FC<{ onPress: () => void }> = ({ onPress }) => {
  return (
    <TouchableOpacity style={styles.floatingButton} onPress={onPress}>
      <PostButtonIcon height={80} width={80} />
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  floatingButton: {
    position: 'absolute',
    bottom: 16,
    right: 16,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
  },
});

export default PostButton;
