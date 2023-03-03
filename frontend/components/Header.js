import { ConnectButton } from "web3uikit"

import React from "react"

const Header = () => {
    return (
        <div className="p-5 border-b-2 flex flex-row items-center justify-between">
            <h1 className="py-4 px-4 font-bold text-3xl">Decentralized lottery</h1>
            <div>
                <ConnectButton moralisAuth={false} />
            </div>
        </div>
    )
}

export default Header
