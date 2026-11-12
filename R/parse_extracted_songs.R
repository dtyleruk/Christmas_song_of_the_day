library(jsonlite)

#Get a playlist in csv form from https://exportify.net/

csv_path <- "songs_scraped/365_days_of_Christmas_.csv"   # change to your Exportify file name

df <- read.csv(csv_path, check.names = FALSE, encoding = "UTF-8",
               stringsAsFactors = FALSE)

# Exportify columns: "Track URI" (spotify:track:ID) and "Track Name"
tracks <- lapply(seq_len(nrow(df)), function(i) {
  list(
    title = df[["Track Name"]][i],
    url   = paste0(sub("spotify:track:", "", df[["Track URI"]][i]), "?si")
  )
})

cat("Converted", length(tracks), "tracks\n")
write(toJSON(tracks, auto_unbox = TRUE, pretty = TRUE), "songs_scraped/365_days_of_Christmas_.json")
