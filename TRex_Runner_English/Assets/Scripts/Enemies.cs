using System.Collections;
using System.Collections.Generic;
using UnityEngine;

public class Enemies : MonoBehaviour
{
    Scrolling scrolling;
    Animator animator;

    void Awake()
    {
        scrolling = GetComponent<Scrolling>();
        animator = GetComponent<Animator>();
    }

    void Update()
    {
        //scrolling.Scrolling_object();
        DisableAnimation();
    }

    void OnTriggerExit2D(Collider2D collision)
    {        
        if (collision.CompareTag("OutScreen"))
        {
            //scrolling.Destroy_Object();
        }        
    }

    void DisableAnimation()
    {/*
        if (GameController.die == true)
        {
            if (animator)
            {
                animator.enabled = false;
            }
        }*/
    }
}
