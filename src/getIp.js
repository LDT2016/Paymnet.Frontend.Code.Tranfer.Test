import 'react-app-polyfill/ie11';
import 'react-app-polyfill/stable';

import { locallanip } from 'locallanip';

window.getIp = locallanip;
