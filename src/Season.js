import React from 'react';

const seasonConfig = {
   winter: {
      text: 'I am sooo cold!',
      iconName: 'snowflake'
   },
   summer: {
      text: 'It\'s way too hot!',
      iconName: 'sun'
   }
}

const getSeason = (lat, month) => {
   if (month > 2 && month < 9) {
      return lat > 0 ? 'summer' : 'winter';
   } else {
      return lat > 0 ? 'winter' : 'summer';
   }
}

const Season = (props) => {
   const season = getSeason(props.latitude, new Date().getMonth());
   const { text, iconName } = seasonConfig[season];

   return (
      <div>
         <i className={`${iconName} icon`} />
         <h1>{text}</h1>
         <i className={`${iconName} icon`} />
      </div>
   )
}

export default Season;