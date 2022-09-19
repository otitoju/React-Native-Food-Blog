import { View, Text, StyleSheet } from 'react-native'
import { TextInput as Input } from 'react-native-paper'
import { theme } from '../core/theme'


const TextInput = ({ errorText, description, ...props }) => {
  return (
    <View style={styles.container}>
      <Input
        style={styles.input}
        selectionColor="#ea4c89"
        underlineColor="#ea4c89"
        mode="outlined"
        {...props}
      />
      {description && !errorText ? (
        <Text style={styles.description}>{description}</Text>
      ) : null}
      {errorText ? <Text style={styles.error}>{errorText}</Text> : null}
    </View>
  )
}

const styles = StyleSheet.create({
    container: {
      width: '100%',
      marginVertical: 12,
    },
    input: {
      backgroundColor: theme.colors.surface,
      color: '#ea4c89',
    },
    description: {
      fontSize: 13,
      color: '#ea4c89',
      paddingTop: 8,
    },
    error: {
      fontSize: 13,
      color: '#ea4c89',
      paddingTop: 8,
    },
  });

export default TextInput