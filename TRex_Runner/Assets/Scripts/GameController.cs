using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class GameController : MonoBehaviour
{
    public static bool run;
    public static bool die;    

    void Awake()
    {
        run = false;
        die = false;
    }

}
