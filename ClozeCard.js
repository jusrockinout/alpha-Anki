function ClozeCard(text, cloze) {
  if(this instanceof ClozeCard)
  {
    if(text.includes(cloze))
    {
      this.cloze = cloze;
      this.partial = text.replace(cloze, "...");
      this.fullText = text;
    }
    else
    {
      console.log("Error: the text '" + text + "' does not contain the the text '" + cloze + "'");
    }
  }
  else
  {
    return new ClozeCard(text, cloze);
  }
}

module.exports = ClozeCard;