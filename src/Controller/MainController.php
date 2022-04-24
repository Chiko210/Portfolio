<?php

namespace App\Controller;

use Symfony\Bundle\FrameworkBundle\Controller\AbstractController;
use Symfony\Component\HttpFoundation\Response;
use Symfony\Component\Routing\Annotation\Route;

class MainController extends AbstractController
{
    /**
     * @Route("/", name="home")
    */
    public function index(): Response
    {
        return $this->render('main/home.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/portfolio", name="portfolio")
    */
    public function portfolio(): Response
    {
        return $this->render('main/portfolio.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/contact", name="contact")
    */
    public function contact(): Response
    {
        return $this->render('main/contact.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/presentation", name="presentation")
    */
    public function presentation(): Response
    {
        return $this->render('main/presentation.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/netflix", name="netflix")
     */
    public function netflix(): Response
    {
        return $this->render('projets/netflix.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }

    /**
     * @Route("/zombicide", name="zombicide")
     */
    public function zombicide(): Response
    {
        return $this->render('projets/zombicide.html.twig', [
            'controller_name' => 'MainController',
        ]);
    }
}
