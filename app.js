async function addToken() {
    if (typeof web3 === 'undefined' || typeof ethereum === 'undefined' || typeof ethereum.selectedAddress === 'undefined') {
   
      try {
        await ethereum.request({ method: 'eth_requestAccounts' });
      } catch (error) {
        console.error(error);
        alert("Failed to connect MetaMask. Please try again or check your MetaMask setup.");
        return;
      }
    }

const tokenAddress = '0x9c62A8fCc76a77938c82B5a76A68AadD6806d107';
const tokenSymbol = 'UNI-V2';
const tokenDecimals = 18;
const tokenImage = 'https://pbs.twimg.com/profile_images/1725190974920441856/u1YvEces_400x400.jpg';

try {
  // 'wasAdded' is a boolean. Like any RPC method, an error can be thrown.
  const wasAdded = await window.ethereum.request({
    method: 'wallet_watchAsset',
    params: {
      type: 'ERC20',
      options: {
        address: tokenAddress, // The address of the token.
        symbol: tokenSymbol, // A ticker symbol or shorthand, up to 5 characters.
        decimals: tokenDecimals, // The number of decimals in the token.
        image: tokenImage, // A string URL of the token logo.
      },
    },
  });

  if (wasAdded) {
    console.log('Thanks for your interest!');
  } else {
    console.log('Could not add');
  }
} catch (error) {
  console.log(error);
}
}
window.addEventListener('DOMContentLoaded', () => {
    const button = document.getElementById('addToken');
    button.addEventListener('click', addToken);
  });