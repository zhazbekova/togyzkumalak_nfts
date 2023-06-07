import { Contract, providers, utils } from "ethers";
import Head from "next/head";
import React, { useEffect, useRef, useState } from "react";
import Web3Modal from "web3modal";
import { abi, NFT_CONTRACT_ADDRESS } from "../constants";
import styles from "../styles/Home.module.css";
 

export default function Home() {
  // walletConnected keep track of whether the user's wallet is connected or not
  const [walletConnected, setWalletConnected] = useState(false);
  // presaleStarted keeps track of whether the presale has started or not
  const [presaleStarted, setPresaleStarted] = useState(false);
  // presaleEnded keeps track of whether the presale ended
  const [presaleEnded, setPresaleEnded] = useState(false);
  // loading is set to true when we are waiting for a transaction to get mined
  const [loading, setLoading] = useState(false);
  // checks if the currently connected MetaMask wallet is the owner of the contract
  const [isOwner, setIsOwner] = useState(false);
  // tokenIdsMinted keeps track of the number of tokenIds that have been minted
  const [tokenIdsMinted, setTokenIdsMinted] = useState("0");
  // Create a reference to the Web3 Modal (used for connecting to Metamask) which persists as long as the page is open
  const web3ModalRef = useRef();

  /**
   * presaleMint: Mint an NFT during the presale
   */
  const presaleMint = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // call the presaleMint from the contract, only whitelisted addresses would be able to mint
      const tx = await nftContract.presaleMint({
        // value signifies the cost of one crypto dev which is "0.01" eth.
        // We are parsing `0.01` string to ether using the utils library from ethers.js
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      window.alert("You successfully minted a TogyzKumalak NFT!");
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * publicMint: Mint an NFT after the presale
   */
  const publicMint = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // call the mint from the contract to mint the Crypto Dev
      const tx = await nftContract.mint({
        // value signifies the cost of one crypto dev which is "0.01" eth.
        // We are parsing `0.01` string to ether using the utils library from ethers.js
        value: utils.parseEther("0.01"),
      });
      setLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      window.alert("You successfully minted a TogyzKumalak NFT!");
    } catch (err) {
      console.error(err);
    }
  };

  /*
      connectWallet: Connects the MetaMask wallet
    */
  const connectWallet = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // When used for the first time, it prompts the user to connect their wallet
      await getProviderOrSigner();
      setWalletConnected(true);
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * startPresale: starts the presale for the NFT Collection
   */
  const startPresale = async () => {
    try {
      // We need a Signer here since this is a 'write' transaction.
      const signer = await getProviderOrSigner(true);
      // Create a new instance of the Contract with a Signer, which allows
      // update methods
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, signer);
      // call the startPresale from the contract
      const tx = await nftContract.startPresale();
      setLoading(true);
      // wait for the transaction to get mined
      await tx.wait();
      setLoading(false);
      // set the presale started to true
      await checkIfPresaleStarted();
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * checkIfPresaleStarted: checks if the presale has started by querying the `presaleStarted`
   * variable in the contract
   */
  const checkIfPresaleStarted = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const provider = await getProviderOrSigner();
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // call the presaleStarted from the contract
      const _presaleStarted = await nftContract.presaleStarted();
      if (!_presaleStarted) {
        await getOwner();
      }
      setPresaleStarted(_presaleStarted);
      return _presaleStarted;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  /**
   * checkIfPresaleEnded: checks if the presale has ended by querying the `presaleEnded`
   * variable in the contract
   */
  const checkIfPresaleEnded = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const provider = await getProviderOrSigner();
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // call the presaleEnded from the contract
      const _presaleEnded = await nftContract.presaleEnded();
      // _presaleEnded is a Big Number, so we are using the lt(less than function) instead of `<`
      // Date.now()/1000 returns the current time in seconds
      // We compare if the _presaleEnded timestamp is less than the current time
      // which means presale has ended
      const hasEnded = _presaleEnded.lt(Math.floor(Date.now() / 1000));
      if (hasEnded) {
        setPresaleEnded(true);
      } else {
        setPresaleEnded(false);
      }
      return hasEnded;
    } catch (err) {
      console.error(err);
      return false;
    }
  };

  /**
   * getOwner: calls the contract to retrieve the owner
   */
  const getOwner = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const provider = await getProviderOrSigner();
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // call the owner function from the contract
      const _owner = await nftContract.owner();
      // We will get the signer now to extract the address of the currently connected MetaMask account
      const signer = await getProviderOrSigner(true);
      // Get the address associated to the signer which is connected to  MetaMask
      const address = await signer.getAddress();
      if (address.toLowerCase() === _owner.toLowerCase()) {
        setIsOwner(true);
      }
    } catch (err) {
      console.error(err.message);
    }
  };

  /**
   * getTokenIdsMinted: gets the number of tokenIds that have been minted
   */
  const getTokenIdsMinted = async () => {
    try {
      // Get the provider from web3Modal, which in our case is MetaMask
      // No need for the Signer here, as we are only reading state from the blockchain
      const provider = await getProviderOrSigner();
      // We connect to the Contract using a Provider, so we will only
      // have read-only access to the Contract
      const nftContract = new Contract(NFT_CONTRACT_ADDRESS, abi, provider);
      // call the tokenIds from the contract
      const _tokenIds = await nftContract.tokenIds();
      //_tokenIds is a `Big Number`. We need to convert the Big Number to a string
      setTokenIdsMinted(_tokenIds.toString());
    } catch (err) {
      console.error(err);
    }
  };

  /**
   * Returns a Provider or Signer object representing the Ethereum RPC with or without the
   * signing capabilities of metamask attached
   *
   * A `Provider` is needed to interact with the blockchain - reading transactions, reading balances, reading state, etc.
   *
   * A `Signer` is a special type of Provider used in case a `write` transaction needs to be made to the blockchain, which involves the connected account
   * needing to make a digital signature to authorize the transaction being sent. Metamask exposes a Signer API to allow your website to
   * request signatures from the user using Signer functions.
   *
   * @param {*} needSigner - True if you need the signer, default false otherwise
   */
  const getProviderOrSigner = async (needSigner = false) => {
    // Connect to Metamask
    // Since we store `web3Modal` as a reference, we need to access the `current` value to get access to the underlying object
    const provider = await web3ModalRef.current.connect();
    const web3Provider = new providers.Web3Provider(provider);

    // If user is not connected to the Goerli network, let them know and throw an error
    const { chainId } = await web3Provider.getNetwork();
    if (chainId !== 80001) {
      window.alert("Change the network to Mumbai");
      throw new Error("Change network to Mumbai");
    }

    if (needSigner) {
      const signer = web3Provider.getSigner();
      return signer;
    }
    return web3Provider;
  };

  // useEffects are used to react to changes in state of the website
  // The array at the end of function call represents what state changes will trigger this effect
  // In this case, whenever the value of `walletConnected` changes - this effect will be called
  useEffect(() => {
    // if wallet is not connected, create a new instance of Web3Modal and connect the MetaMask wallet
    if (!walletConnected) {
      // Assign the Web3Modal class to the reference object by setting it's `current` value
      // The `current` value is persisted throughout as long as this page is open
      web3ModalRef.current = new Web3Modal({
        network: "mumbai testnet",
        providerOptions: {},
        disableInjectedProvider: false,
      });
      connectWallet();

      // Check if presale has started and ended
      const _presaleStarted = checkIfPresaleStarted();
      if (_presaleStarted) {
        checkIfPresaleEnded();
      }

      getTokenIdsMinted();

      // Set an interval which gets called every 5 seconds to check presale has ended
      const presaleEndedInterval = setInterval(async function () {
        const _presaleStarted = await checkIfPresaleStarted();
        if (_presaleStarted) {
          const _presaleEnded = await checkIfPresaleEnded();
          if (_presaleEnded) {
            clearInterval(presaleEndedInterval);
          }
        }
      }, 5 * 1000);

      // set an interval to get the number of token Ids minted every 5 seconds
      setInterval(async function () {
        await getTokenIdsMinted();
      }, 5 * 1000);
    }
  }, [walletConnected]);

  /*
      renderButton: Returns a button based on the state of the dapp
    */
  const renderButton = () => {
    // If wallet is not connected, return a button which allows them to connect their wallet
    if (!walletConnected) {
      return (
          <button onClick={connectWallet} className={styles.button}>
            Connect your wallet
          </button>
      );
    }

    // If we are currently waiting for something, return a loading button
    if (loading) {
      return <button className={styles.button}>Loading...</button>;
    }

    // If connected user is the owner, and presale hasn't started yet, allow them to start the presale
    if (isOwner && !presaleStarted) {
      return (
          <button className={styles.button} onClick={startPresale}>
            Start Presale!
          </button>
      );
    }

    // If connected user is not the owner but presale hasn't started yet, tell them that
    if (!presaleStarted) {
      return (
          <div>
            <div className={styles.description}>Presale hasn&#39;t started!</div>
          </div>
      );
    }

    // If presale started, but hasn't ended yet, allow for minting during the presale period
    if (presaleStarted && !presaleEnded) {
      return (
          <div>
            <div className={styles.description}>
            Get ready to mint Togyz Kumalak NFTs as the development phase begins! 
            </div>
            <button className={styles.button} onClick={presaleMint}>
              Presale Mint 
            </button>
          </div>
      );
    }

    // If presale started and has ended, it's time for public minting
    if (presaleStarted && presaleEnded) {
      return (
          <button className={styles.button} onClick={publicMint}>
            Public Mint 
          </button>
      );
    }
  };

  return (
      <div class="mainy">
        <Head>
          <title>Togyz Kumalak</title>
          <meta name="description" content="Whitelist-Dapp" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <div class="invisible" id="invisible">.</div>
  <div class="player" id="player">
    <img class="avatar" src="https://www.pngall.com/wp-content/uploads/5/Profile-Avatar-PNG.png"></img>
    <h3>Player name</h3>
    <button onclick="doyou()">Quit the game</button>
  </div>
  
  <div class="opponent" id="opponent">
    <img class="avatar" src="qobylandy.jpg"></img>
    <h3>Easy Bot</h3>
  </div>
  <div class="yay3" id="quit">
    <h3>Are you sure you want to quit the game?</h3>
<button onclick="location.href='main.html'">Back to main menu</button>
<button onclick="hide()">Back to the game</button>
  </div>
  <div class="yay" id="playerwon">
    <h3>You won!!!!</h3>
    <div> 
            {renderButton()}
          </div>
<button onclick="location.href='main.html'">Back to main menu</button>
  </div>
  <div class="yay2" id="opponentwon">
    <h3>You lose</h3>
    <button onclick="location.href='main.html'">Back to main menu</button>
  </div>
 
  <table id="tablo" class="table">
    <thead>
      <tr>
        <td class="minifield" id="opponent9">

       </td>
       <td class="minifield" id="opponent8">
</td>

        <td class="minifield" id="opponent7">
    
        </td>

        <td class="minifield" id="opponent6">
       
        </td>

        <td class="minifield" id="opponent5">
        
        </td>

        <td class="minifield" id="opponent4">
          
        </td>

        <td class="minifield" id="opponent3">

        </td>

        <td class="minifield" id="opponent2">
        </td>

        <td class="minifield" id="opponent1">
    
        </td>
      </tr>
    </thead>
    <tr>
      <td colspan="18" class="bigfield" id="playerscore">
 
          <p class="ball" id="20"></p>
          <p class="ball" id="21"></p>
          <p class="ball" id="22"></p>
          <p class="ball" id="23"></p>
          <p class="ball" id="24"></p>
          <p class="ball" id="25"></p>
          <p class="ball" id="26"></p>
           <p class="ball" id="27"></p>
          <p class="ball" id="28"></p>
          <p class="ball" id="29"></p>
          <p class="ball" id="30"></p>
          <p class="ball" id="31"></p>
          <p class="ball" id="32"></p>
          <p class="ball" id="33"></p>
          <p class="ball" id="34"></p>
          <p class="ball" id="35"></p>
        <p class="ball" id="36"></p>
          <p class="ball" id="37"></p>
          <p class="ball" id="38"></p>
          <p class="ball" id="39"></p>
          <p class="ball" id="40"></p>
          <p class="ball" id="41"></p>
          <p class="ball" id="42"></p>
          <p class="ball" id="43"></p>
          <p class="ball" id="44"></p>
        <p class="ball" id="45"></p>
          <p class="ball" id="46"></p>
          <p class="ball" id="47"></p>
          <p class="ball" id="48"></p>
          <p class="ball" id="49"></p>
          <p class="ball" id="50"></p>
          <p class="ball" id="51"></p>
          <p class="ball" id="52"></p>
          <p class="ball" id="53"></p>
                  <p class="ball" id="54"></p>
          <p class="ball" id="55"></p>
          <p class="ball" id="56"></p>
          <p class="ball" id="57"></p>
          <p class="ball" id="58"></p>
          <p class="ball" id="59"></p>
          <p class="ball" id="60"></p>
          <p class="ball" id="61"></p>
          <p class="ball" id="62"></p>
          <p class="ball" id="0"></p> 
         <p class="ball" id="1"></p>
         <p class="ball" id="2"></p>
         <p class="ball" id="3"></p>
         <p class="ball" id="4"></p>
         <p class="ball" id="5"></p>
         <p class="ball" id="6"></p>
         <p class="ball" id="7"></p>
         <p class="ball" id="8"></p>
               <p class="ball" id="72"></p>
          <p class="ball" id="73"></p>
          <p class="ball" id="74"></p>
          <p class="ball" id="75"></p>
          <p class="ball" id="76"></p>
          <p class="ball" id="77"></p>
          <p class="ball" id="78"></p>
          <p class="ball" id="79"></p>
          <p class="ball" id="80"></p>
               <p class="ball" id="63"></p>
          <p class="ball" id="64"></p>
          <p class="ball" id="65"></p>
          <p class="ball" id="66"></p>
          <p class="ball" id="67"></p>
          <p class="ball" id="68"></p>
          <p class="ball" id="69"></p>
          <p class="ball" id="70"></p>
          <p class="ball" id="71"></p>
           <p class="ball" id="81"></p>
         <p class="ball" id="82"></p>
         <p class="ball" id="83"></p>
         <p class="ball" id="84"></p>
         <p class="ball" id="85"></p>
         <p class="ball" id="86"></p>
         <p class="ball" id="87"></p>
         <p class="ball" id="88"></p>
         <p class="ball" id="89"></p>
           <p class="ball" id="90"></p>
         <p class="ball" id="91"></p>
         <p class="ball" id="92"></p>
         <p class="ball" id="93"></p>
         <p class="ball" id="94"></p>
         <p class="ball" id="95"></p>
         <p class="ball" id="96"></p>
         <p class="ball" id="97"></p>
         <p class="ball" id="98"></p>
          <p class="ball" id="99"></p>
         <p class="ball" id="100"></p>
         <p class="ball" id="101"></p>
         <p class="ball" id="102"></p>
         <p class="ball" id="103"></p>
         <p class="ball" id="104"></p>
         <p class="ball" id="105"></p>
         <p class="ball" id="106"></p>
         <p class="ball" id="107"></p>
      
      </td>
    </tr>
    <tr>
      <td colspan="18" class="bigfield" id="opponentscore">
                <p class="ball" id="108"></p>
         <p class="ball" id="109"></p>
         <p class="ball" id="110"></p>
         <p class="ball" id="111"></p>
         <p class="ball" id="112"></p>
         <p class="ball" id="113"></p>
                 <p class="ball" id="153"></p>
        <p class="ball" id="154"></p>
        <p class="ball" id="155"></p>
        <p class="ball" id="156"></p>
        <p class="ball" id="157"></p>
        <p class="ball" id="158"></p>
        <p class="ball" id="159"></p>
        <p class="ball" id="160"></p>
        <p class="ball" id="161"></p>
                       <p class="ball" id="9"></p>
        <p class="ball" id="10"></p>
        <p class="ball" id="11"></p>
        <p class="ball" id="12"></p>
        <p class="ball" id="13"></p>
        <p class="ball" id="14"></p>
        <p class="ball" id="15"></p>
        <p class="ball" id="16"></p>
        <p class="ball" id="17"></p>
              <p class="ball" id="18"></p>
          <p class="ball" id="19"></p>
         <p class="ball" id="114"></p>
         <p class="ball" id="115"></p>
         <p class="ball" id="116"></p>
          <p class="ball" id="117"></p>
         <p class="ball" id="118"></p>
         <p class="ball" id="119"></p>
         <p class="ball" id="120"></p>
         <p class="ball" id="121"></p>
         <p class="ball" id="122"></p>
         <p class="ball" id="123"></p>
         <p class="ball" id="124"></p>
         <p class="ball" id="125"></p>
                 <p class="ball" id="126"></p>
        <p class="ball" id="127"></p>
        <p class="ball" id="128"></p>
        <p class="ball" id="129"></p>
        <p class="ball" id="130"></p>
        <p class="ball" id="131"></p>
        <p class="ball" id="132"></p>
        <p class="ball" id="133"></p>
        <p class="ball" id="134"></p>
           <p class="ball" id="135"></p>
        <p class="ball" id="136"></p>
        <p class="ball" id="137"></p>
        <p class="ball" id="138"></p>
        <p class="ball" id="139"></p>
        <p class="ball" id="140"></p>
        <p class="ball" id="141"></p>
        <p class="ball" id="142"></p>
        <p class="ball" id="143"></p>
          <p class="ball" id="144"></p>
        <p class="ball" id="145"></p>
        <p class="ball" id="146"></p>
        <p class="ball" id="147"></p>
        <p class="ball" id="148"></p>
        <p class="ball" id="149"></p>
        <p class="ball" id="150"></p>
        <p class="ball" id="151"></p>
        <p class="ball" id="152"></p>
      </td>
    </tr>
    <tfoot>
      <tr>

       <td class="minifield" id="player1">
        
       </td>
       <td class="minifield" id="player2">
       
       </td>
       <td class="minifield" id="player3">
  
       </td>
       <td class="minifield" id="player4">

       </td>
       <td class="minifield" id="player5">
        
       </td>
       <td class="minifield" id="player6">

      </td>
      <td class="minifield" id="player7">
     
      </td>
      <td class="minifield" id="player8">
      
      </td>
      <td class="minifield" id="player9">

      </td>
    </tr>
  </tfoot>
</table>

<script src="my-app\pages\bot.js"></script>
   
        </div>
  );
}