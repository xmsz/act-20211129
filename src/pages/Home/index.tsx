import { createElement, useState } from 'rax';
import View from 'rax-view';
import Text from 'rax-text';

import styles from './index.module.css';
import Logo from '../../components/Logo';
import { history } from 'rax-app';

import { Dialog, Drawer } from '@alifd/meet';

export default function Home() {
  const [visible, setVisible] = useState(false);
  return (
    <View className={styles.homeContainer}>
      <Logo uri="//gw.alicdn.com/tfs/TB1MRC_cvb2gK0jSZK9XXaEgFXa-1701-1535.png" />
      <Text className={styles.homeTitle}>Welcome to Your Rax App</Text>
      <Text className={styles.homeInfo}>More information about Rax</Text>
      <Text className={styles.homeInfo}>Visit https://rax.js.org</Text>
      <ad-custom unit-id="100"></ad-custom>
      <adCustom unitId="100"></adCustom>

      <button
        onClick={() => {
          setVisible(true);
        }}
      >
        打开弹窗
      </button>

      <Drawer
        visible={visible}
        onClose={() => {
          setVisible(false);
        }}
      >
        <div style={{ minHeight: '60vh' }}>
          <button
            onClick={() => {
              Dialog.show({
                content: '123',
                onOk: () => {
                  history.push('/test');
                },
              });
            }}
          >
            打开dialog
          </button>
        </div>
      </Drawer>
    </View>
  );
}
