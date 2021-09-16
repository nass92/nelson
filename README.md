# Installation
Assurez-vous de naviguer sur Brave, firefox, ou google chrome. Et d'avoir metamask d'installer sur votre navigateur.

### Yarn 
Si vous voulez Cloner ce projet, copiez collez ces commandes sur votre terminal :
git clone https://github.com/    cd    .

une fois le projet cloner et ouvert dans un editeur de texte; taper dans votre terminal la commande " yarn " afin d'installer toute les dependances nécessaire. 

### Yarn start

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### Yarn test

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### Yarn build

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.




# Nelson 

Ce projet est à destination d'un artiste contemporain, Nelson Makamo.
le but n'est pas de faire de ces tableaux des nft. Mais de répondre à cette problématique:
Comment créer une nouvelle source de liquidité pour ces infrastructures?

L'objectif est de transformer des vidéos de l'artiste en nft.
pour cela, différentes étapes ont été définies.

## les dépendances : 

Différentes librairies et outils ont été utilisés durant ce projet :

React, React-router-dom => facilite la navigation entre les différentes pages d'un même projet.

Web3-Hooks => Permet de simplifier la connexion entre le front-end et la blockchaine (metamask par exemple)

Ether.js => Il nous permet d'écrire notre code de connexion avec la blockchain.

Axios => Permet de récupérer une API, ou d'envoyer des éléments à une adresse, serveur ...

SASS (SCSS) => styles css (simplifié).

chakra-ui => facilite le code de différent élément, comme par exemple un button, ou un modal etc.


## Création NFT. 

"pinOnIpfs" permet d'envoyer un fichier direct sur Pinata. Dans cette fonction, un try catch permet de retourner les erreurs, si elles sont existantes. Dans le try on definit au préalable le type de données que nous voulons envoyer sur Pinata.
Puis on utilise axios.post afin de les envoyés sur le réseau Pinata qui renvoie direct le CID.

    const pinOnIpfs = async (file) => {
    try {
        let formatData = new FormData();
        formatData.append("file", file);

        const hash = await axios.post(`https://api.pinata.cloud/pinning/pinFileToIPFS`, formatData, {
            headers: {
            "Content-Type": `multipart/form-data; boundary=${formatData._boundary}`,
            pinata_api_key: process.env.REACT_APP_PINATA_API_KEY,
            pinata_secret_api_key: process.env.REACT_APP_PINATA_SECRET_KEY,
            },
        })
        .then((result) => result.data.IpfsHash);

        return hash
    } catch (e) {
        console.error(e.message)
    }

La fonction handleSendNFT, s'occupe de presque toute la procédure de création.
Un try catch est également déclaré. on récupère d'abord toutes les informations entrées dans le formulaire de création nft
    try {
    setLoading(true)
    const txt = watch().message.trim().split("").filter(el => !['!','?','.',';',':','/',','].includes(el)).join('').split('  ').join('').toLowerCase()
    const textHashed = await ethers.utils.id(txt)
    const hash = await pinOnIpfs(watch().file[0])
    const nft = {
      author: watch().author.toString(),
      textHashed: textHashed,
      txt: watch().message,
      url: `https://gateway.pinata.cloud/ipfs/${hash}`,
      title: watch().title,
    }

Puis, une fois ces informations récuperées, on appelle la fonction "certify" de notre smart contract, afin de créer le nft demandé.

    const tx = await TXT.certify(nft.textHashed, nft.txt, nft.title, nft.url, nft.author). 

La création de nft ne peut être faite uniquement par l'artiste. seul l'owner du smart contract peut appeler cette fonction certify.


## Expo 

La partie expo a pour but d'afficher tous les NFT du smart-contract. En effet, toute personne peut visualiser un nft, même s'il n'est pas l'owner.

Pour cela, à l'appel de la fonction Expo; Les nft sont récupérés par la fonction getNFT() et push dans un tableau.


const getNFT = async () => {
      const expoOWned = []
      const totalSupply = await TXT.totalSupply()
      for (let i = 0; i < totalSupply.toString(); i++) {
        // let approved = await TXT.getApproved(i)
        const nft = await TXT.getNMById(i)

        expoOWned.push({
          txt: nft.txt,
          title: nft.title,
          author: nft.artist,
          url: nft.url,
          id: i,
        })
      }
      setExpo(expoOWned)
    }

L'affichage se fait grâce à un map du tableau. Chaque nft à son id avec ces données associées.





