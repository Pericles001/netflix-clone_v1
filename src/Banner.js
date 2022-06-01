import React, {useEffect, useState} from 'react';

function Banner() {
    const [movie, setMovie] = useState([]);

    useEffect(() => {
      async function fetchData(){
          //
      }
      fetchData();
    }, []);


    return (
        <header>
            {/*background image*/}
            {/*title*/}
            {/*div with 2 buttons*/}
            {/*description*/}
        </header>
    );
}

export default Banner;