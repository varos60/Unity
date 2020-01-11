using System.Collections;
using System.Collections.Generic;
using UnityEngine;
using UnityEngine.UI;

public class GameController : MonoBehaviour
{
    public static bool run;    
    public static bool die;
    public Text score_text;
    public Text hiScore_text;
    int score;

    void Awake()
    {
        run = false;
        die = false;
        score = 0;
    }

    void Start()
    {
        StartCoroutine(Start_Coroutune());
    }

    void Update()
    {        
    }

    void SetText(Text text, string texto)
    {
        text.text = texto;
    }

    string TextFormater(int number, string adicionalText = "")
    {        
        string text = "000000" + number.ToString();
        text = text.Substring(text.Length - 6);
        return adicionalText + text;
    }

    IEnumerator Start_Coroutune()
    {
        while (true)
        {
            if (run == true && die == false)
            {
                yield return StartCoroutine(RiseScore());
            }
            yield return null;
        }
    }

    IEnumerator RiseScore()
    {                            
        score++;
        SetText(score_text, TextFormater(score));
        yield return new WaitForSeconds(0.1f);            
    }
}
