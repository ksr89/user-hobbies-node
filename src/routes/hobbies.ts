import { Request, Response, Router } from 'express';
import User, { IUser } from '../models/user';
import Hobbies, { IHobbies } from '../models/hobbies';

const router: Router = Router();

router.get('/hobbies/:userId', async (req: Request, res: Response) => {

  try {
    const { userId } = req.params;

    if (userId) {
      const user = await User.findById(userId);
      if (user) {
        const hobbies: IHobbies[] = await Hobbies.find({
          user
        })
        return res.status(200).send(hobbies);
      } else {
        return res.status(400).send({
          "message": "User not found"
        });
      }
    } else {
      return res.status(400).send({
        "message": "Invalid dat"
      });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }

})

router.post('/hobbies/:userId', async (req: Request, res: Response) => {

  try {
    const { userId } = req.params;
    const { passionLevel, name, year } = req.body;

    if (userId && passionLevel && name && year) {
      const user = await User.findById(userId);

      if (user) {
        const hobby:IHobbies = new Hobbies({ user, passionLevel, name, year });
        await hobby.save();
        return res.status(200).send(hobby);
      } else {
        return res.status(400).send({
          "message": "User not found"
        });
      }
    } else {
      return res.status(400).send({
        "message": "Invalid data."
      });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }

})

router.delete('/hobbies/:userId/:hobbyId', async (req: Request, res: Response) => {

  try {
    const { userId, hobbyId } = req.params;

    if (userId && hobbyId) {
      const hobby = await Hobbies.findOneAndRemove({
        user: userId,
        _id: hobbyId
      });

      if (hobby) {
        return res.status(200).send(hobby);
      } else {
        return res.status(400).send({
          "message": "Hobby not found"
        });
      }
    } else {
      return res.status(400).send({
        "message": "Invalid data."
      });
    }
  } catch (error) {
    res.status(500).send("Server Error");
  }

})

export default router;
