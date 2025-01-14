#![allow(non_snake_case)]

mod story_listing;

use dioxus::prelude::*;
use story_listing::{StoryItem, StoryListing};

fn main() {
    dioxus_web::launch(App);
}

fn App(cx: Scope) -> Element {
    render! {
        StoryListing {
            story: StoryItem {
                id: 0,
                title: "Hello, Hacker News!".to_string(),
                url: None,
                text: None,
                by: "Cassidy".to_string(),
                score: 0,
                descendants: 0,
                time: chrono::Utc::now(),
                kids: vec![],
                r#type: "".to_string(),
            }
        }
    }
}
