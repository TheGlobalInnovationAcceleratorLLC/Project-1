"use strict";

$(document).ready(function () {

    // THERE IS NO CHANNEL ID AVAILABLE FOR THIS PLAYLIST > WE COULDN'T COMPLETE THE API CALL
    // WE DID A DIRECT EMBED IN THE HTML FOR THIS SPECIAL PLAYLSIT
      function channelCall (){

                // API Call STEP #1: You Tube Data API's "Channel List.List" API Call Used To Get The ChannelId
                var url = 'https://www.googleapis.com/youtube/v3/channels';

                  url += '?' + $.param({
                      'part': 'snippet,contentDetails',
                      'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                      'forUsername': 'Byte+By+Byte' // This Is The Same As The Channel Name
                  });

                  $.ajax({
                      type: "GET",
                      url: url
                  }).done(function(result) {
                      
                      console.log("ChannelId from the Channel API Call Result/Response >>>>>>>>>>>>>>");
                      console.log(result.items[0].id);              
                      

                      // The ChannelId Retrieved From The JSON Response AND Plugged Into The PlaylistCall
                      var channelId = result.items[0].id;

                      
                      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
                      // >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>


                      // API Call STEP #2: You Tube Data API's "Playlist.List" API Call Used To Get The PlaylistId
                      function playlistCall(){

                          var url = 'https://www.googleapis.com/youtube/v3/playlists';

                          url += '?' + $.param({
                              'part': 'snippet,contentDetails,player',
                              'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                              'channelId': channelId,
                              'maxResults': 50 // The You Tube Data API Call Only Allows Up To 50 Results
                          }); 

                          $.ajax({
                              type: "GET",
                              url: url
                          }).done(function(result){

                              
                              // // Console Log The Whole Response To See All Of The Playlists For This Channel
                              // console.log("ALL of The Playlists From The Playlist API Call Result/Response >>>>>>>>>>>>>>");
                              // console.log(result);

                              // // Takes The JSON Result/Response, Gets A PlaylistId For The First Playlist To Be 
                              // // Rendered To The Page, AND
                              // // Creates An Iframe For The Playlist 

                              // console.log("PlaylistId & PlaylistId For The First Playlist >>>>>>>>>>>>>>");
                              // console.log(result.items[].snippet.title + ":" + result.items[].id);

                              // var playlistId1 = result.items[].id;

                              // var playlist1HTML = '<li><iframe title="YouTube Video Iframe" type="text/html" width="640" height="390" src="https://www.youtube.com/embed/videoseries?list='+ playlistId1 + '" frameborder="0" allowFullScreen></iframe></li><br/>'; 
                                             

                              // // Takes The Selected Playlist Iframe(s) We Created An Renders Them To The HMTL Page 
                              // var finalHTML = playlist1HTML;
                              // $('#careerresourcesvideos').append(finalHTML);

                          });  
                      }

                      playlistCall();

                  });
      }

      channelCall();


    // COMPLETED API CALL FOR THIS GOOGLE WHITE BOARD EXERCISE 
    function videosCall (){

        // API Call STEP #1: You Tube Data API's "Videos List.List" API Call Used To Get The VideoId
        var url = 'https://www.googleapis.com/youtube/v3/videos';

            url += '?' + $.param({
                'part': 'snippet,contentDetails',
                'key': 'AIzaSyBosREDOI_AxtNcHkvK--los4AS_CbUnhM',
                'id': 'XKu_SEDAykw' 
            });

            $.ajax({
                type: "GET",
                url: url
            }).done(function(result) {
                                
                // Console Log The Whole Response
                console.log("The whole video Api Call Result/Response >>>>>>>>>>>>>>");
                console.log(result);


                // Console Log The Video Title AND The VideoId
                console.log("videoId from the video Api Call Result/Response >>>>>>>>>>>>>>");
                console.log(result.items[0].snippet.title + ":" + result.items[0].id);                       

                // The VideoId Retrieved From The JSON Response
                var videoId1 = result.items[0].id;

                // Creates An Iframe For The video
                var video1HTML = '<li><iframe width="640" height="390" src="https://www.youtube.com/embed/' + videoId1 + '" frameborder="0" allowfullscreen></iframe></li><br/>';

                // Takes The Iframe We Created An Renders It To The HMTL Page 
                var finalHTML = video1HTML;

                $('#careerresourcesvideos').append(finalHTML);
                      
            });  
    }
               
    videosCall();


});