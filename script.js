 
async function loadPokemon(name, tag, num_img_path){
  const row = document.body.getElementsByClassName('row')

  const column = document.createElement('div')
  column.setAttribute('class', 'col-2')

  const card = document.createElement('div')
  card.setAttribute('class', 'card border-dark')

  const pokemon_img = document.createElement('img')
  pokemon_img.setAttribute('src', 'pokemon_images/' + name + '.png')
  pokemon_img.setAttribute('class', 'card-img-top')

  const card_body = document.createElement('div')
  card_body.setAttribute('class', 'card-body')

  const header5 = document.createElement('h5')
  header5.setAttribute('class', 'card-title')
  header5.textContent = name

  const number_image = document.createElement('img')
  number_image.setAttribute('src', num_img_path)
  number_image.setAttribute('style', 'width: 15%')

  const tag_text = document.createElement('p')
  tag_text.setAttribute('class', 'card-text')
  if(tag != null){
    tag_text.textContent = tag
  }
  else{
    tag_text.textContent = ""
  }

  const draft_button = document.createElement('button')
  draft_button.setAttribute('class', 'btn btn-dark')
  draft_button.textContent = 'Draft'

  column.appendChild(card)
  card.appendChild(pokemon_img)
  card.appendChild(card_body)
  card_body.appendChild(header5)
  card_body.appendChild(tag_text)
  card_body.appendChild(draft_button)
  header5.appendChild(number_image)

  return column
 }