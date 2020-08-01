import Obscure from '@talaikis/react-native-obscure';

export default class Privacy {
  static enableBlur() {
    Obscure.activateObscure();
  }

  static disableBlur() {
    Obscure.deactivateObscure();
  }
}
