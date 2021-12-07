import { v4 as uuidv4 } from 'uuid';
import { assoc, map, omit } from 'ramda'

export const addid = map(assoc('id', uuidv4()))

export const removeid = map(omit(['id']))
