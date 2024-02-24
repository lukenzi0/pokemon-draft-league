import mysql from 'mysql2'
import dotenv from 'dotenv'
import { nineteen, eighteen, seventeen, sixteen, fifteen, fourteen, thirteen, twelve, eleven, ten, nine, eight, seven, six, five, four, three, two, one } from './script.js'
dotenv.config()

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE
}).promise()

export async function getPlayers(){
  const [rows] = await pool.query("SELECT * FROM player")
  return rows
}

export async function getPlayer(id){
  const [result] = await pool.query("SELECT * FROM player WHERE id = ?", [id])
  return result
}

export async function createPlayer(name){
  const result = await pool.query('INSERT INTO player (player_name) VALUES (?)', [name])
}

export async function getPokemon(){
  const [result] = await pool.query("SELECT * FROM pokemon")
  return result
}

export async function getPokemonByValue(value){
  const [rows] = await pool.query("SELECT * FROM pokemon WHERE point_value = ?", [value])
  return rows
}

async function createPokemon(name, path, value){
  await pool.query('INSERT INTO pokemon (pokemon_name, img_path, point_value) VALUES(?, ?, ?)',
  [name, path, value])
}

export async function getDraft(){
  const result = await pool.query("SELECT * FROM draft")
}

export async function createDraft(pokemon_id, player_id){
  await pool.query("INSERT INTO draft(pokemon_id, player_id) VALUES(?, ?)", [pokemon_id, player_id])
  await pool.query ("UPDATE pokemon SET isDrafted = 1 WHERE id = ?", [pokemon_id])
}
