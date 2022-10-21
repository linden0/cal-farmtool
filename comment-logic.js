var config = {
    apiKey: "AIzaSyAO2Vlrbnmr3-d8pryaDjSgyYgPGlJC6us",
    authDomain: "droughttool.firebaseapp.com",
    databaseURL: "https://droughttool-default-rtdb.firebaseio.com",
    projectId: "droughttool",
    storageBucket: "droughttool.appspot.com",
    messagingSenderId: "938533200890"
};

firebase.initializeApp(config);
const rootRef = firebase.database().ref();
const commentsRef = rootRef.child('comments');
document.getElementById("submit-comment").addEventListener("click", function () {
    //Replace line breaks in comment with br tags.
    var newcomment = document.getElementById('comment-input').value.replace(/\n/g, "<br>");
    //Define a new, keyed post.
    var newPostRef = commentsRef.push();
    //Fill tne new keyed post with data
    newPostRef.set({
        name: document.getElementById('name-input').value.trim(),
        comment: newcomment.trim(),
        frompage: location.pathname,
        when: firebase.database.ServerValue.TIMESTAMP
    });
});

function showpastcomments() {
    var showat = document.getElementById('past-comments');
    //Get comments whose from page equals this page's pathname.
    var commentsRef = firebase.database().ref('comments/').orderByChild('frompage').equalTo(location.pathname);
    commentsRef.once('value', function (snapshot) {
        snapshot.forEach(function (itemSnapshot) {
            //Get the object for one snapshot
            var itemData = itemSnapshot.val();
            var comment = itemData.comment;
            var name = itemData.name;
            var when = new Date(itemData.when).toLocaleDateString("en-us");
            showat.innerHTML += "<li class='comment'><span class='commenter'>" + name + 
                "</span><br>" + comment + "</li>";
        })
    })
}
//Called when page first opens and also after Submit button click to show all comments for this page.
showpastcomments()