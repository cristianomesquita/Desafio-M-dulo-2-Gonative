import { StyleSheet } from 'react-native'
import { colors, metrics } from 'styles'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.light,
    padding: metrics.basePadding
  },
  form: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center'
  },
  input: {
    flex: 1,
    borderColor: colors.regular,
    borderWidth: 1,
    marginRight: metrics.baseMargin,
    backgroundColor: colors.white,
    borderRadius: metrics.baseRadius,
    height: 40,
    paddingHorizontal: metrics.basePadding
  }
})

export default styles
