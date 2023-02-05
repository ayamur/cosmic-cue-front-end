import styles from './FortuneList.module.css'

const FortuneList = (props) => {
  console.log('FortuneList props:', props)
  return (
    <main className={styles.container}>
      {props.fortunes.map((fortune) => (
        <>
          <p key={fortune._id}>
            <h3>Your Fortune: {fortune.message}</h3>
            <h4>Lucky Number: {fortune.luckyNumber}</h4>
            <h5>Category Chosen: {fortune.category}</h5>
          </p>
        </>
      ))}
      Fortune List
    </main>
  )
}

export default FortuneList



//! profiles show
// {/* <main>
//       <div><a href='/profiles/'><button class='btn'>⬅Back⬅</button></a>
//       </div>
//       <div>
//         <img class='profile-avatar' src='<%= profile.avatar %>'' alt="<%= profile.name %>' s avatar">
//       </div>
//       <h1>It's <%= isSelf ? "you" : profile.name %>!</h1>
//       <% if (isSelf) {%>
//         <h2>🎆 Share a Quote on Your Profile! 🎇</h2>
//         <form action='/profiles/<%= profile._id %>/quotes' method='POST'>
//           <label class='quote'>
//             Quote:
//             <input type='text' name='phrase' autocomplete='off'>
//           </label>
//           <br>
//           <label class='quote'>
//             From:
//             <input type='text' name='location' autocomplete='off'>
//           </label>
//           <br>
//           <label class='quote'>
//              By:  
//             <input type='text' name='author' autocomplete='off'>
//           </label>
//           <br>
//           <button type='submit' class='btn'>🔶 Add Quote 🔶</button>
//         </form>
//         <% } %>
//           <h1>
//             <%= profile.quote %>
//           </h1>
//           <% if (profile.quotes.length) {%>
//             <h2>
//               <%= isSelf ? '🔷 You have' : `🔷 ${profile.name} has` %> quotes! Here they are! 🔷
//             </h2>
//             <h3>
//               <% profile.quotes?.forEach(quote=> { %>
//                 <%= getRandomQuote() %>
//                   <%= quote.phrase %> from
//                     <%= quote.location %> by
//                       <%= quote.author %>
//                         <%= getRandomQuote() %>
//                           <% if (isSelf) { %>
//                             <form action='/profiles/quotes/<%= quote._id %>?_method=DELETE' method='POST'
//                               style='display: inline-block;'>
//                               <button type='submit' class='btn'> ❌ Remove ❌</button>
//                               <% } %>
//             </h3>
//             <% }) %>
//               <% } else { %>
//                 <h2>
//                   <%= isSelf ? "🫧 You don't" : `🫧 ${profile.name} doesn't` %> have any quotes yet. 🫧
//                 </h2>
//                 <% } %>
//     </main> */}


    //!   routes/profiles.js 
    // router.post('/:id/quotes', isLoggedIn, profilesCtrl.createQuote)
    //router.delete('/quotes/:id', isLoggedIn, profilesCtrl.deleteQuote)

    //! models/profile.js
// const quoteSchema = new Schema({
//   phrase: String,
//   location: String,
//   author: String,
// }, {
//   timestamps: true
// })

// const profileSchema = new Schema({
//   name: String,
//   avatar: String,
//   quotes: [quoteSchema],
//   quoter: { type: Schema.Types.ObjectId, ref: 'Profile' }
// }, {
//   timestamps: true
// })

// const Profile = mongoose.model('Profile', profileSchema)

// export {
//   Profile
// }