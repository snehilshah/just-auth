import {connection} from '@/lib/db/db'

export async function main() {

// this is doing a normal query to the database
  const [result1, fields1] = await connection.query(
    'SELECT * FROM users WHERE id = ?',
    [1]
  )
  console.log(result1)
  console.log(fields1)

// now this is using prepared statements, preventing sql injection and also optimizing speed
  const [result, fields] = await connection.execute(
    'SELECT * FROM users WHERE id = ?',
    [1]
  )
  console.log(result)
  console.log(fields)
}