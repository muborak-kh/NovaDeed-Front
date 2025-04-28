import './App.css'
import { Route, Routes } from 'react-router-dom'

// SCREENS
import Home from "./Screens/Home"
import ProjectDetail from "./Screens/ProjectDetail"

import DMain from './screens/developer/DMain'
import DObjects from './screens/developer/DObjects'
import DContracts from './Screens/Developer/DContracts'
import DOAdd from './Screens/Developer/Objects/DOAdd'
import Projects from './screens/Projects'
import { THEME, TonConnectUIProvider } from '@tonconnect/ui-react'

function App() {
	return (
		<TonConnectUIProvider
            manifestUrl="https://trade.jabs.uz/tonconnect-manifest.json"
            uiPreferences={{ theme: THEME.DARK }}
            walletsListConfiguration={{
                includeWallets: [
                    {
                        appName: "tonwallet",
                        name: "TON Wallet",
                        imageUrl: "https://wallet.ton.org/assets/ui/qr-logo.png",
                        aboutUrl: "https://chrome.google.com/webstore/detail/ton-wallet/nphplpgoakhhjchkkhmiggakijnkhfnd",
                        universalLink: "https://wallet.ton.org/ton-connect",
                        jsBridgeKey: "tonwallet",
                        bridgeUrl: "https://bridge.tonapi.io/bridge",
                        platforms: ["chrome", "android"]
                    },
                    {
                        appName: "nicegramWallet",
                        name: "Nicegram Wallet",
                        imageUrl: "https://static.nicegram.app/icon.png",
                        aboutUrl: "https://nicegram.app",
                        universalLink: "https://nicegram.app/tc",
                        deepLink: "nicegram-tc://",
                        jsBridgeKey: "nicegramWallet",
                        bridgeUrl: "https://bridge.tonapi.io/bridge",
                        platforms: ["ios", "android"]
                    },
                    {
                        appName: "tokenpocket",
                        name: "TokenPocket",
                        imageUrl: "https://hk.tpstatic.net/logo/tokenpocket.png",
                        aboutUrl: "https://tokenpocket.pro",
                        jsBridgeKey: "tokenpocket",
                        platforms: ["ios", "android"]
                    },
                    {
                        appName: "dewallet",
                        name: "DeWallet",
                        imageUrl: "https://raw.githubusercontent.com/delab-team/manifests-images/main/WalletAvatar.png",
                        aboutUrl: "https://delabwallet.com",
                        universalLink: "https://t.me/dewallet?attach=wallet",
                        bridgeUrl: "https://bridge.dewallet.pro/bridge",
                        platforms: ["ios", "android", "macos", "windows", "linux"]
                    },
                    {
                        appName: "cdcTonWallet",
                        name: "Crypto.com DeFi Wallet",
                        imageUrl: "https://apro-ncw-api-file.crypto.com/wallet/logo",
                        aboutUrl: "https://crypto.com/defi-wallet",
                        universalLink: "https://wallet.crypto.com/deeplink/ton-connect",
                        deepLink: "dfw://",
                        jsBridgeKey: "cdcTonWallet",
                        bridgeUrl: "https://wallet.crypto.com/sse/tonbridge",
                        platforms: ["ios", "android", "chrome"]
                    },
                    {
                        appName: "tobi",
                        name: "Tobi",
                        imageUrl: "https://app.tobiwallet.app/icons/logo.png",
                        aboutUrl: "https://tobi.fun",
                        universalLink: "https://t.me/TobiCopilotBot?attach=wallet",
                        bridgeUrl: "https://ton-bridge.tobiwallet.app/bridge",
                        platforms: ["ios", "android", "macos", "windows", "linux"]
                    },
                    {
                        appName: "trustwalletTon",
                        name: "Trust",
                        imageUrl: "https://assets-cdn.trustwallet.com/dapps/trust.logo.png",
                        aboutUrl: "https://trustwallet.com/about-us",
                        bridgeUrl: "https://tonconnect.trustwallet.com/bridge",
                        jsBridgeKey: "trustwalletTon",
                        platforms: ["chrome", "ios", "android"]
                    },
                    {
                        appName: "bitgetWalletLite",
                        name: "Bitget Wallet Lite",
                        imageUrl: "https://raw.githubusercontent.com/bitgetwallet/download/main/logo/png/bitget_wallet_lite_logo.png",
                        aboutUrl: "https://web3.bitget.com",
                        universalLink: "https://t.me/BitgetWallet_TGBot?attach=wallet",
                        bridgeUrl: "https://ton-connect-bridge.bgwapi.io/bridge",
                        platforms: ["ios", "android", "macos", "windows", "linux"]
                    },
                    {
                        appName: "onekey",
                        name: "OneKey",
                        imageUrl: "https://common.onekey-asset.com/logo/onekey-x288.png",
                        aboutUrl: "https://onekey.so",
                        jsBridgeKey: "onekeyTonWallet",
                        platforms: ["chrome"]
                    },
                    {
                        appName: "tomoWallet",
                        name: "Tomo Wallet",
                        imageUrl: "https://pub.tomo.inc/logo.png",
                        aboutUrl: "https://www.tomo.inc/",
                        universalLink: "https://t.me/tomowalletbot?attach=wallet",
                        bridgeUrl: "https://go-bridge.tomo.inc/bridge",
                        platforms: ["ios", "android", "macos", "windows", "linux"]
                    },
                    {
                        appName: "hpyTonWallet",
                        name: "HyperPay Wallet",
                        imageUrl: "https://hyperpay-website.oss-cn-hongkong.aliyuncs.com/static/dist/images/2022-12-30/logo.png",
                        aboutUrl: "https://www.hyperpay.tech",
                        universalLink: "https://www.hyperpay.tech/download&deeplink=hyperpay://web3/wallet/tonconnect",
                        jsBridgeKey: "hpyTonWallet",
                        bridgeUrl: "https://bridge.tonapi.io/bridge",
                        platforms: ["ios", "android", "macos", "windows", "linux"]
                    }
                ]
            }}
            actionsConfiguration={{
                twaReturnUrl: "https://t.me/Apisgamebot/start?startapp=ton"
            }}
        >
			<Routes>
				<Route path="/" index element={<Home/>}/>
				<Route path="/projects" element={<Projects/>}/>
				<Route path="/project/:id" element={<ProjectDetail/>}/>

				{/* ADMIN ROUTES */}
				{/* <Route path="/admin" element={<AdminMain/>}/> */}

				{/* DEVELOPER ROUTES */}
				<Route path="/crm" element={<DMain/>}/>
				<Route path="/crm/objects" element={<DObjects/>}/>
				<Route path="/crm/contracts" element={<DContracts/>}/>
				
				{/* DEVELOPER ADD OBJECT */}
				<Route path="/crm/objects/create" element={<DOAdd/>}/>

				{/* CUSTOMER ROUTES */}
				{/* <Route path="/customer" element={<CustomerMain/>}/> */}
			</Routes>
		</TonConnectUIProvider>
	)
}

export default App
