function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    // Finish this function
    if(views  >= 1000 && views  <= 999999){
        views = views / 1000;
        views = views + "K"
    }
    else if(views >= 1000000 && views <= 999999999){
        views = views / 1000000;
        views = views + "M";
    }
    else if(views >= 1000000000 && views <= 999999999999){
        views = views / 1000000000;
        views = views + "B";
    }
    else if(views >= 1000000000000 && views <= 999999999999999){
        views = views / 1000000000000;
        views = views + "T";
    }
    else{
        views = "Invalid view number"
    }

    let container = document.querySelector(".container")

    card = document.createElement("div");
    card.setAttribute("class", "card");
    container.appendChild(card);


    image_box = document.createElement('div');
    image_box.setAttribute("class", "image-box");
    card.appendChild(image_box);

    text_box = document.createElement('div');
    text_box.setAttribute("class", "text-box");
    card.appendChild(text_box);

    thumbnail_box = document.createElement('img');
    thumbnail_box.setAttribute("class", "thumbnail");
    thumbnail_box.setAttribute("src", thumbnail);
    image_box.appendChild(thumbnail_box);

    duration_box = document.createElement('div');
    duration_box.setAttribute("class", "duration");
    image_box.appendChild(duration_box);

    duration_text_box = document.createElement('span');
    duration_text_box.setAttribute("class", "duration-text");
    duration_text_box.innerHTML = duration;
    duration_box.appendChild(duration_text_box);

    heading_text_box = document.createElement('span');
    heading_text_box.setAttribute("class", "heading");
    heading_text_box.innerHTML = title;
    text_box.appendChild(heading_text_box)

    details_box = document.createElement('div');
    details_box.setAttribute("class", "details-box")
    text_box.appendChild(details_box)

    details_list = document.createElement('ul');
    details_list.setAttribute("class", "details-list");
    details_box.appendChild(details_list);

    channel_text_box = document.createElement('li');
    channel_text_box.setAttribute("class", "details")
    channel_text_box.setAttribute("id", "channel")
    channel_text_box.innerHTML = cName;
    details_list.appendChild(channel_text_box)

    views_text_box = document.createElement('li');
    views_text_box.setAttribute("class", "details");
    views_text_box.innerHTML = views;
    details_list.appendChild(views_text_box)

    months_text_box = document.createElement('li');
    months_text_box.setAttribute("class", "details");
    months_text_box.innerHTML = monthsOld + " months Old";
    details_list.appendChild(months_text_box)

    

    // let title_span = document.getElementsByClassName("heading");
    // let channel_span = document.getElementById("channel");
    // let views_span = document.getElementById("views");
    // let monthsOld_span = document.getElementsByClassName("monthsAgo");
    // let duration_span = document.getElementsByClassName("duration-text");
    // let thumbnail_span = document.getElementsByClassName("thumbnail");

}


title = prompt("Enter the title of the video")
channelName = prompt("Enter the channel name")
views = Number(prompt("Enter the views of the video"))
monthsOld = prompt("Enter how many months old the video is")
duration = prompt("Enter the duration of the video")
thumbnail = prompt("Enter the thumbnail source of the video")


createCard(title, channelName, views, monthsOld, duration, thumbnail)